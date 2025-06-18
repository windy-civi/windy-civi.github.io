from pathlib import Path
import json
import re
from urllib import request
from urllib.parse import urlparse
from utils.file_utils import format_timestamp, record_error_file, write_action_logs


def download_bill_pdf(content, save_path, bill_identifier):
    versions = content.get("versions", [])
    if not versions:
        print("⚠️ No versions found for bill")
        return

    files_dir = save_path / "files"
    files_dir.mkdir(parents=True, exist_ok=True)

    for version in versions:
        for link in version.get("links", []):
            url = link.get("url")
            if url and url.endswith(".pdf"):
                try:
                    response = request.get(url, timeout=10)
                    if response.status_code == 200:
                        filename = f"{bill_identifier}.pdf"
                        file_path = files_dir / filename
                        with open(file_path, "wb") as f:
                            f.write(response.content)
                        print(f"📄 Downloaded PDF: {filename}")
                    else:
                        print(
                            f"⚠️ Failed to download PDF: {url} (status {response.status_code})"
                        )
                except Exception as e:
                    print(f"❌ Error downloading PDF: {url} ({e})")


def handle_bill(
    STATE_ABBR,
    content,
    session_name,
    date_folder,
    output_folder,
    error_folder,
    filename,
):
    """
    Handles a bill JSON file by saving:

    1. A full snapshot of the bill in logs/ using the earliest action date
    2. One separate JSON file per action in logs/, each timestamped and slugified
    3. A files/ directory, with any linked PDFs downloaded (optional)

    Skips and logs errors if required fields (e.g. identifier) are missing.

    Returns:
        bool: True if saved successfully, False if skipped due to missing identifier.
    """

    # Optional: Download linked PDF files (⚠️ very slow).
    # Default is OFF to preserve performance.
    DOWNLOAD_PDFS = False

    bill_identifier = content.get("identifier")
    if not bill_identifier:
        print("⚠️ Warning: Bill missing identifier")
        record_error_file(
            error_folder,
            "from_handle_bill_missing_identifier",
            filename,
            content,
            original_filename=filename,
        )
        return False

    save_path = Path(output_folder).joinpath(
        f"country:us",
        f"state:{STATE_ABBR}",
        "sessions",
        "ocd-session",
        f"country:us",
        f"state:{STATE_ABBR}",
        date_folder,
        session_name,
        "bills",
        bill_identifier,
    )
    (save_path / "logs").mkdir(parents=True, exist_ok=True)
    (save_path / "files").mkdir(parents=True, exist_ok=True)

    actions = content.get("actions", [])
    if actions:
        dates = [a.get("date") for a in actions if a.get("date")]
        timestamp = format_timestamp(sorted(dates)[0]) if dates else None
    else:
        timestamp = None

    if not timestamp:
        print(f"⚠️ Warning: Bill {bill_identifier} missing action dates")
        timestamp = "unknown"

    # Save entire bill
    full_filename = f"{timestamp}_entire_bill.json"
    output_file = save_path.joinpath("logs", full_filename)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(content, f, indent=2)
    print(f"✅ Saved bill {bill_identifier}")

    # Save each action as a separate file
    if actions:
        write_action_logs(actions, bill_identifier, save_path / "logs")

    # Download associated bill PDFs: if enabled
    if DOWNLOAD_PDFS:
        download_bill_pdf(content, save_path, bill_identifier)

    return True

def extract_bill_ids_from_event(event_json: dict) -> list[str]:
    """
    Extracts a list of referenced bill identifiers from an event JSON object.

    Args:
        event_json (dict): Parsed JSON object from an event_*.json file.

    Returns:
        list[str]: A list of bill identifiers (e.g. 'HB_123')
    """
    bill_ids = []
    agenda = event_json.get("agenda", [])
    for item in agenda:
        for entity in item.get("related_entities", []):
            if entity.get("entity_type") == "bill":
                raw = entity.get("name")
                if raw:
                    clean = raw.strip()
                    bill_ids.append(clean)

    return bill_ids

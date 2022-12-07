from datetime import datetime
import logging
import sys
log = logging.getLogger('app.main.business')

def submit(query, body):
    log.info("Submitting Data")
    startDate = datetime.strptime(body["startDate"], "%Y-%m-%d")
    endDate = datetime.strptime(body["endDate"], "%Y-%m-%d")
    
    return len(query.keys())

companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]

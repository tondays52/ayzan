import urllib.request
import urllib.parse
import json
import re
import os
import sys

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def get_vqd(query):
    url = 'https://duckduckgo.com/?q=' + urllib.parse.quote(query) + '&iar=images&iax=images&ia=images'
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            m = re.search(r'vqd=([\d-]+)', content) or re.search(r'vqd="([^"]+)"', content) or re.search(r"vqd='([^']+)'", content)
            if m:
                return m.group(1)
    except Exception as e:
        print(f"Error getting vqd for {query}: {e}")
    return None

def search_images(query, limit=3):
    vqd = get_vqd(query)
    if not vqd:
        return []
    
    img_api = f'https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={vqd}&f=,,,'
    req = urllib.request.Request(img_api, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('results', [])
            return results[:limit]
    except Exception as e:
        print(f"Error querying images for {query}: {e}")
        return []

if __name__ == '__main__':
    query = 'COSRX Low pH Good Morning Gel Cleanser white background product'
    imgs = search_images(query, 2)
    print("Found images:", len(imgs))
    for img in imgs:
        print("URL:", img.get('image'))
        print("Title:", img.get('title'))
        print("Dimensions:", img.get('width'), "x", img.get('height'))

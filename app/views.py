from flask import jsonify, Markup, render_template
from app import app
import os
import re

initialised = False
musicFiles = None
mpeg_regex = re.compile(r"^.*\.mp3$")
jpeg_regex = re.compile(r"^.*\.jpe?g$")
png_regex = re.compile(r"^.*\.png$")

def getMusicFiles(path): # credit to https://stackoverflow.com/a/25226267

    d = {'name': os.path.basename(path)}
    if os.path.isdir(path):
        d['type'] = "directory"
        d['children'] = [getMusicFiles(os.path.join(path,x)) for x in os.listdir(path)]
    else:
        if mpeg_regex.match(path) is not None:
            d['type'] = "mp3"
        elif jpeg_regex.match(path) is not None or png_regex.match(path) is not None:
            d['type'] = "img"
        else:
            d['type'] = "file"
    return d

@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html',
        pagename = 'Home',
        files = musicFiles)

# initialise file system
if not initialised:
    path = os.path.join(app.static_folder, "music/")
    musicFiles = getMusicFiles(path)
    initialised = True

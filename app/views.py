from flask import jsonify, Markup, render_template
from app import app
import os
import re

@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html',
        pagename = 'Home',
		songlist = getSongList())
		
def getSongList():
	output = []
	
	static_path = os.path.join(app.static_folder, "music/")
	files = os.listdir(static_path)
	mpeg_regex = re.compile(r'^.*\.mp3$')
	for name in files:
		if mpeg_regex.match(name) is not None:
			output.append(name)
	output.sort()
	return output

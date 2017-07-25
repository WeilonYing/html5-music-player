from flask import jsonify, Markup, render_template, redirect, request
from random import randint
import json
from app import app

@app.route('/')
@app.route('/index/')
def index():
    return render_template('index.html',
        pagename = 'Home',
		songlist = ['Exile Vilify.mp3', '09 - Shake That - Band-Maid.mp3'])
		
def getSongList():
	output = ["Exile Vilify.mp3", "09 - Shake That - Band-Maid.mp3"]
	print (output)
	return "[" + ",".join(output) + "]"

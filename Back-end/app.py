import uuid
from flask import Flask
from flask_socketio import SocketIO, send, emit
import ollama
from torch import rand 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, cors_allowed_origins="*")

#@socketio.on('message')
#def handle_message(message):
#    print(f'Received message: {message}')
#    send('reponse', broadcast=True)



@socketio.on('message')
def handle_message(msg):
    stream = ollama.chat(
        model='GameStoryBot',
        messages=[{'role': 'user', 'content': msg}],
        stream=True,
    )
    message_id =str(uuid.uuid4())
    for chunk in stream:
        content ={ 'content':chunk['message']['content'],'message_id':message_id}
        send(content)
        
if __name__ == '__main__':
    socketio.run(app, debug=True)
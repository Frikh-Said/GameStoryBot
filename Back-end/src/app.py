from flask import Flask, request

from langchain_community.llms import Ollama

llm = Ollama(model="GameStoryBot")

response =llm.invoke("Tell me a joke")
print(response)
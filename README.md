# GameStoryBot

# How to run?
### STEPS:

Clone the repository

```bash
Project repo: https://github.com/Frikh-Said/GameStoryBot.git
```

### STEP 01- Create a environment after opening the repository

```bash
py -m env venv
```

```bash
venv\Scripts\activate
```

### STEP 02- install the requirements
```bash
pip install -r requirements.txt
```

### Download the quantize model from the link provided in this model folder & keep the model in this directory:

```ini
## Download the Llama 2 Model:
Phi-3-mini_GGUF-GameStory-unsloth.Q8_0.gguf

## From the following link:
https://huggingface.co/frikh-said/Phi-3-mini_GGUF-GameStory/tree/main


## install ollama desktop :

You need to covert the fine-tuned model via llama.cpp, and write a Modelfile to use the coverted model.

```ini
ollama serve

##creat the ollama model:
ollama create GameStoryBot -f <Modelfile path>
```


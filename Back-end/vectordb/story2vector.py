from langchain_community.vectorstores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_community.document_loaders import PDFPlumberLoader

file="../data/Jeu video pédagogique.pdf"
folder_path = "./"

embedding = FastEmbedEmbeddings()
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1024, chunk_overlap=80, length_function=len, is_separator_regex=False
)

loader = PDFPlumberLoader(file)
docs = loader.load_and_split()
print(f"docs len={len(docs)}")

chunks = text_splitter.split_documents(docs)
print(f"chunks len={len(chunks)}")

vector_store = Chroma.from_documents(
        documents=chunks, embedding=embedding, persist_directory=folder_path
)

vector_store.persist()
import nltk
#nltk.download('punkt')
import numpy as np
from nltk.stem.porter import PorterStemmer
stemmer = PorterStemmer()

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stem(word):
    return stemmer.stem(word.lower())

def bag_of_words(tokenizeSentence,all_words):
    tokenizeSentence = [stem(w) for w in tokenizeSentence]
    bag = np.zeros(len(all_words),dtype=np.float32)
    for idx,w in enumerate(all_words):
        if w in tokenizeSentence:
            bag[idx] = 1.0
    return bag

# sentene = ['hello','how','are','you']
# words = ['hi','hello','I','you','bye','thank','cool']
# bag = bag_of_words(sentene,words)
# print(bag)

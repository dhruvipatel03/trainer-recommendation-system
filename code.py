def wordcount(word, string):
    count = 0
    for character in string:
        if character == word:
            count += 1
    return count
word = "a"
string = "amaaam"
print(f"charcters: {wordcount(word, string)}")

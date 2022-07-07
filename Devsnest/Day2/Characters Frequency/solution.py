from collections import deque
def solve(str1):
    char_map = dict()
    for character in str1:
        if character not in char_map:
            char_map[character] = 1
        else:
            char_map[character] += 1
    return char_map.values()
    
if __name__ == '__main__':
	str1 = input()
	res = solve(str1)
	print(*res)
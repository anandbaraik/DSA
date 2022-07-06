from collections import deque
def solve(a, b):
    int_val = a // b
    float_val = a/b
    return int_val * float_val;

if __name__ == '__main__':
	a = int(input())
	b = int(input())
	res = solve(a, b)
	print(res)
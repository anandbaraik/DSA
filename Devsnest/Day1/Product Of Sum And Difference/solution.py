from collections import deque
def solve(a, b):
    sum = a + b;
    diff = a - b;
    return sum * diff;

if __name__ == '__main__':
	a = int(input())
	b = int(input())
	res = solve(a, b)
	print(res)
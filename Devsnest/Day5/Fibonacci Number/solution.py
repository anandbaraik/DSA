from collections import deque
def solve(n):

    if n == 1 or n == 0:
        return n

    prev_term1 = solve(n-1)
    prev_term2 = solve(n-2)
    febonacci = prev_term1 + prev_term2

    return febonacci

if __name__ == '__main__':
	n = int(input())
	out = solve(n)
	print(out)
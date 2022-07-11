from collections import deque
def solve(n):
    if n == 1 or n == 0:
        return 1
    term1 = solve(n-1)

    return n*term1

if __name__ == '__main__':
	n = int(input())
	ans = solve(n)
	print(ans)
from collections import deque
def solve(n, arr, x, y):
    sum = 0
    for num in arr[x:y+1]:
        sum += num
    avg = sum / ((y-x)+1)

    return avg

if __name__ == '__main__':
	n = int(input())
	arr = list(map(int, input().split()))
	x = int(input())
	y = int(input())
	res = solve(n, arr, x, y)
	print(res)
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


#2nd Method:
# from collections import deque
# def solve(n):
#     fact = 1
#     while n >0:
#         fact *= n
#         n -= 1
#     return fact

# if __name__ == '__main__':
# 	n = int(input())
# 	ans = solve(n)
# 	print(ans)
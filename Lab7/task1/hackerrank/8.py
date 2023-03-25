n = int(input())
arr = list(map(int, input().split()))
arr.sort()
arr.reverse()
for i in range(1,len(arr)):
    if(arr[i] != arr[i-1]):
        print(arr[i])
        exit()
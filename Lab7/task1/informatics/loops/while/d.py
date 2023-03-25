n = int(input())

if n == 1:
    print('YES')
    exit()

i = 1

while i <= n:
    if i == n:
        print('YES')
        exit()
    i <<= 1

print('NO')
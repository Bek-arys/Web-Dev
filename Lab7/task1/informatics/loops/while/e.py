n = int(input())
k = 0
# 1 << k -> k-тая степень двойки
while (1 << k) < n:
    k += 1
print(k)
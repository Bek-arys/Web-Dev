def array_front9(nums):
  index = -1
  for i in range(len(nums)):
    if nums[i] == 9:
      index = i
      break
  
  if index < 4 and index != -1:
    return True
  
  return False
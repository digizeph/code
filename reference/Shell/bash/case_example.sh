#!/bin/bash

echo "Enter your lucky number"
read n
case $n in
1)
echo echo "You got 1st prize" ;;
2)
echo "You got 2nd prize" ;;
3)
echo "You got 3rd prize" ;;
*)
echo "Sorry, try for the next time" ;;
esac

#!/bin/bash

printf "$0\n"

case "$1" in 
"start" )
  echo "start";;
"stop" )
  echo "stop";;
esac
exit 0

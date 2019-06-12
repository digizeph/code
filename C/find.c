#include <stdio.h>
#include <string.h>

#define MAXLINE 1000

int geline(char *line, int max);

main(int argc, char *argv[]) {
  char line[MAXLINE];
  long lineno = 0;
  int c, except = 0, number = 0, found = 0;

  while(--argc > 0 && (*++argv)[] == '-') {
    while(c = *++argv[0]) {
       switch(c) {
         case 'x':
           except = 1;
           break;
         case 'n':
           number = 1;
           break;
         default:
           printf("find: illegal option &c\n", c);
           argc = 0;
           found = -1;
       }
       if (argc != 1) {
          printf("Usage: find -x -n pattern\n");
       } else {
         
       }
    }
  }
}

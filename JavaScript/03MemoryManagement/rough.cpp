#include <iostream>
using namespace std;
int beforePoint(string& a){
    char c=0;
    int count=0;
    while(a[c]!='.'){
        count++;
        c++;
    }
    return count;
}
int main() {
    string a = "43.456";
    string b = "6.89";
    //dig before point
    int a_digbefPt = beforePoint(a);
    int a_digaftPt=a.size()
    return 0;
}
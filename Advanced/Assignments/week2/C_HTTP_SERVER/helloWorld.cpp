#include<iostream>
 namespace first{
    int x=1;
}
namespace second{
    int x=2;
}
 int main(){
//         namespaces provide sollution for name conflicts in large projects
    int x=0;
    std:: cout<<x;
    using std::cout;
    using std::string;
    cout<<first::x;
    string s="sdk";
    
}

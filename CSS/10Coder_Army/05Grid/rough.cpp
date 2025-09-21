#include <iostream>
using namespace std;
#include<vector>
// #include<pair>
int main() {
    std::cout << "Hello, World!" << std::endl;
    pair<int, int> p = {3, 4};
    if(p == make_pair(3, 4)){
        cout << "yes";
    }
    return 0;
}
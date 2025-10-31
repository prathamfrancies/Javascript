class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        
        console.log("sleep");
    }
    work(){

        console.log("work");

    }
}

class engineer extends person{
    work(){

        console.log("solve problems,build problems");

    }
}
class Doctor extends person{
    work(){

        console.log("Treat patients");

    }
}
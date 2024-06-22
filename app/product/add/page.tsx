import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Form from "@/components/product/form";
import ViewPicture from "@/components/product/viewPicture";

export default function Page(){
    return (
        <>
            <NavBar/>
            <ViewPicture src={"/app/assets/images/peteca.jpg"}/>
            <Form/>
            <Footer/>
        </>
    )
}
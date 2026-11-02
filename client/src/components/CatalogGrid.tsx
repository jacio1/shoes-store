import Image from "next/image";
import { Card, CardFooter } from "./ui/card";

export default function CatalogGrid(){
    return(
        <Card>
            <Image src={"/termit1.jpg"} alt="catalogType" ></Image>
            <CardFooter>
                <p>Мужчинам</p>
            </CardFooter>
        </Card>
    )
}
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import { CardContainer } from "./styles"
import { ModalCards } from "../modal"

export function Cards( {item} ) {
    let thumbnail= item.imageLinks && item.imageLinks.smallThumbnail;

    return (  
        <CardContainer>
            <Card className="Card">
                <CardBody>
                    <CardTitle className="Title" tag="h5">
                        {item.title}
                    </CardTitle>
                    <CardSubtitle className="author" tag="h6">
                        {item.authors}
                    </CardSubtitle>
                    </CardBody>
                    <img
                    className="CardImg"
                    alt="Card cap"
                    src={thumbnail}
                    />
                <CardBody>
                <ModalCards item={item}/>       
                </CardBody>       
            </Card>
        </CardContainer>  
    )
}

   
import { Franchise } from "@/types/franchise";
import { use } from "react";

export default function FranchiseCard(
    {
        franchisePromise
    } : 
    {
        franchisePromise: Promise<Franchise>
    }
) {
    const franchise = use(franchisePromise);

    return (
        <>
        {
            franchise ?
                <h3>{franchise.name}</h3>
            :
                <h3>Franchise Not Found</h3>
        }
        </>
    )
}
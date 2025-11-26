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
                <div className="franchise-card border-radius-lg box-shadow">
                    <img src={`/storage/franchise/${franchise.id}.jpg`} alt="" />
                    <div className="franchise-card__mask"></div>
                    <h3 className="franchise-card__name">{franchise.name}</h3>
                </div>
            :
                <h3>Franchise Not Found</h3>
        }
        </>
    )
}
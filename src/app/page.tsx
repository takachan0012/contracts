import { redirect } from "next/navigation"
import { networks } from "@/config"

export default function HomePage(){
    const defaultNetworkId = networks[0].id
    redirect(`/chainid/${defaultNetworkId}`)
}
// "use client"

// import { use } from "react"
// import { StationService } from "@/components/stations/station-service"

// interface StationDetailsPageProps {
//   params: Promise<{
//     id: string
//   }>
// }

// export default function StationDetailsPage({ params }: StationDetailsPageProps) {
//   const { id } = use(params)

//   return <StationService initialView="details" stationId={id} />
// }








// "use client"

// import { StationService } from "@/components/stations/station-service"

// interface StationDetailsPageProps {
//   params: {
//     id: string
//   }
// }

// export default function StationDetailsPage({ params }: StationDetailsPageProps) {
//   const { id } = params

//   return <StationService initialView="details" stationId={id} />
// }









"use client"

import { use } from "react"
import { StationService } from "@/components/stations/station-service"

interface StationDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default function StationDetailsPage({ params }: StationDetailsPageProps) {
  const { id } = use(params)

  return <StationService initialView="details" stationId={id} />
}

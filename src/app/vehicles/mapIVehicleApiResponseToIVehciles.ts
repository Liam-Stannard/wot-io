// Custom

import { IVehicleComplex, IVehiclesApiResponse } from "./vehicle";

export function mapIVehicleApiResponseToIVehicles(response: IVehiclesApiResponse): IVehicleComplex[] {

    let transformed : IVehicleComplex[] = [];
    let data = Object.entries(response.data);
    
    data.forEach(([id, vehicle]) => {

      transformed.push({
        id: Number(id),
        name: vehicle.name,
        tier: vehicle.tier,
        type: vehicle.type,
        nation: vehicle.nation,
        images: vehicle.images,
        is_wheeled: vehicle.is_wheeled,
        radios: vehicle.radios,
        is_premium: vehicle.is_premium,
        tag: vehicle.tag,
        tank_id: vehicle.tank_id,
        suspensions: vehicle.suspensions,
        provisions: vehicle.provisions,
        engines: vehicle.engines,
        crew: vehicle.crew,
        guns: vehicle.guns,
        multination: vehicle.multination,
        description: vehicle.description,
        short_name: vehicle.short_name,
        is_premium_igr: vehicle.is_premium_igr,
        next_tanks: vehicle.next_tanks,
        modules_tree: vehicle.modules_tree,
        prices_xp: vehicle.prices_xp,
        is_gift: vehicle.is_gift,
        price_gold: vehicle.price_gold,
        price_credit: vehicle.price_credit,
        default_profile: vehicle.default_profile,
        turrets: vehicle.turrets
      });
    
    });

    return transformed;
}
    

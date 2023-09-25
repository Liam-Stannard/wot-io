export interface IVehiclesApiResponse {
    status: string
    meta: Meta
    data: IVehicleComplex[]
  }
  
  export interface Meta {
    count: number
    page_total: number
    total: number
    limit: number
    page: number
  }

  export interface IVehicle {
    type: string
    nation: string
    tier: number
    name: string
    id: number
    images: VehicleImages
  }
  
  
  
  export interface IVehicleComplex {
    is_wheeled: boolean
    radios: number[]
    is_premium: boolean
    tag: string
    images: VehicleImages
    tank_id: number
    suspensions: number[]
    provisions: number[]
    engines: number[]
    crew: VehicleCrew[]
    type: string
    guns: number[]
    multination: any
    description: string
    short_name: string
    is_premium_igr: boolean
    next_tanks: number[]
    modules_tree: ModulesTree
    nation: string
    tier: number
    prices_xp: PricesXp
    is_gift: boolean
    name: string
    price_gold: number
    price_credit: number
    default_profile: DefaultProfile
    turrets: number[]
    id: number
  }
  
  export interface VehicleImages {
    small_icon: string
    contour_icon: string
    big_icon: string
  }
  
  export interface VehicleCrew {
    roles: VehicleCrewRoles
    member_id: string
  }
  
  export interface VehicleCrewRoles {
    commander?: string
    gunner?: string
    radioman?: string
    driver?: string
    loader?: string
  }
  
  
  export interface VehicleEngine {
    name: string
    power: number
    weight: number
    tag: string
    fire_chance: number
    tier: number
  }
  
  export interface VehicleSuspension {
    name: string
    weight: number
    load_limit: number
    tag: string
    traverse_speed: number
    tier: number
    steering_lock_angle: number
  }
  
  export interface VehicleArmor {
    turret: VehicleTurret
    hull: VehicleHull
  }
  
  export interface VehicleTurret {
    front: number
    sides: number
    rear: number
  }
  
  export interface VehicleHull {
    front: number
    sides: number
    rear: number
  }
  
  export interface VehicleModules {
    gun_id: number
    suspension_id: number
    turret_id: number
    radio_id: number
    engine_id: number
  }
  
  export interface VehicleGun {
    move_down_arc: number
    caliber: number
    name: string
    weight: number
    move_up_arc: number
    fire_rate: number
    dispersion: number
    tag: string
    traverse_speed: number
    reload_time: number
    tier: number
    aim_time: number
  }
  
  export interface VehicleTurret2 {
    name: string
    weight: number
    view_range: number
    hp: number
    tag: string
    traverse_speed: number
    traverse_right_arc: number
    tier: number
    traverse_left_arc: number
  }
  
  export interface VehicleRadio {
    tier: number
    signal_range: number
    tag: string
    name: string
    weight: number
  }
  
  export interface VehicleAmmo {
    penetration: number[]
    stun: any
    type: string
    damage: number[]
  }

  export interface ModulesTree { }

  export interface PricesXp { }

  export interface DefaultProfile { }
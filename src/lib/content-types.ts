export interface TAQContent {
  hero: {
    title: string
    subtitle: string
  }
  introduction: {
    title: string
    content: string
  }
  pillars: {
    pillar1: PillarContent
    pillar2: PillarContent
    pillar3: PillarContent
    pillar4: PillarContent
  }
  finalProduct: {
    title: string
    intro: string
    parameters: {
      title: string
      items: string[]
    }
    assortment: {
      title: string
      items: string[]
    }
  }
  certification: {
    title: string
    sections: {
      traceability: { title: string; content: string }
      certification: { title: string; content: string }
      supervision: { title: string; content: string }
    }
  }
  contact: {
    title: string
    organization: {
      name: string
      address: string
      email: string
    }
    certificationBodies: {
      title: string
      bodies: Array<{
        name: string
        address: string
      }>
    }
  }
}

export interface PillarContent {
  number: string
  title: string
  description: string
  points: string[]
}

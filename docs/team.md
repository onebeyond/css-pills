---
title: The team
description: Get to know the people behind the project.
prev: false
next: false
editLink: true
head:
  - - meta
    - property: "og:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=The%20team.%20Get%20to%20know%20the%20people%20behind%20the%20project
  - - meta
    - name: "twitter:image"
      content: https://ob-css-pills-og.vercel.app/api/og?title=The%20team.%20Get%20to%20know%20the%20people%20behind%20the%20project
  - - meta
    - property: "og:title"
      content: "The team"
  - - meta
    - property: "og:description"
      content: "Get to know the people behind the project."
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const coreContributors = [
  {
    avatar: 'https://www.github.com/baumannzone.png',
    name: 'Jorge Baumann',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/baumannzone' },
      { icon: 'twitter', link: 'https://twitter.com/baumannzone' }
    ]
  },
  {
    avatar: 'https://github.com/eduvilla97.png',
    name: 'Eduardo Villaverde',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/eduvilla97' },
    ]
  },
  {
    avatar: 'https://www.github.com/arturogbruno.png',
    name: 'Arturo Gómez',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/arturogbruno' },
    ]
  }
]

const contributors = [
  {
    avatar: 'https://www.github.com/carpasse.png',
    name: 'Carlos Serrano',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/carpasse' },
    ]
  },
]

const inactiveContributors = [
  {
    avatar: 'https://www.github.com/ArshiaSaleem98.png',
    name: 'Arshia Saleem',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ArshiaSaleem98' },
    ]
  },
]
</script>

# The team

Get to know the people behind the project.

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Core team
    </template>
    <template #lead>
      Core maintainers of the project
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreContributors" />
</VPTeamPage>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Contributors
    </template>
    <template #lead>
      People who have contributed to the project
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="contributors" />
</VPTeamPage>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Inactive members
    </template>
    <template #lead>
      People who have contributed to the project but are no longer active
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="inactiveContributors" />
</VPTeamPage>
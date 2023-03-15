---
prev: false
next: false
editLink: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
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
    avatar: 'https://www.github.com/ArshiaSaleem98.png',
    name: 'Arshia Saleem',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/ArshiaSaleem98' },
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
</script>

# Our Team

Say hello to our awesome maintainers.

<VPTeamMembers size="small" :members="members" />

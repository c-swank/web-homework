import React from 'react'
import { css } from '@emotion/core'
import { Container, GridList, GridListTile } from '@material-ui/core'

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16)
}

/*
* TODO: Implement a tile sorting algorithm that will attempt to fill each row optimally
*  Eg, if the specified numb er of cols is 3, then a best match would be 1 + 2, or 1 + 1 + 1
*  Ideally, we would sort for reducing or preventing succeeding repetitive sizes
* */

const tileDataGenerator = () => {
  const tileData = []
  for (let i = 0; i < 10; i++) {
    tileData.push({
      id: i,
      title: 'Some title...',
      content: 'This could be some kind of activity feed or other way to engage. If backed by' +
        ' a service designed to prioritize fetching the most relevant content, this could be' +
        ' a useful tool for users to view up front. Check out the menu tab to the left of the' +
        ' page for more route options.',
      color: () => { return `#${randomColor()}` },
      cols: () => { return Math.floor(Math.random() * (2) + 1) }
    })
  }
  return tileData
}

export default function HomePage () {
  return (
    <Container>
      <GridList cellHeight={200} className='home-grid-list' cols={3}>
        {tileDataGenerator().map((tile) => (
          <GridListTile
            cols={tile.cols() || 1}
            css={css`
              div {
                border-radius: 20px !important;
              }
            `}
            key={tile.id}
          >
            <div style={{ backgroundColor: tile.color(), padding: '10px', height: '100%' }}>
              <div style={{ display: 'inline-block' }}>{tile.title}</div>
              <div style={{ display: 'inline-block' }}>{tile.content}</div>
            </div>
          </GridListTile>
        ))}
      </GridList>
    </Container>
  )
}

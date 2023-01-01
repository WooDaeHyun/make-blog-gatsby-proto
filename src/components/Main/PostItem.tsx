import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0.3, 0.3, 0.3, 0.3);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.33);
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`

const PostItemContent = styled.div`
  flex: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #eaeaeb;
  padding: 15px;
`

const Title = styled.div`
  background-color: #eaeaeb;
  color: black;
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`

const Date = styled.div`
  background-color: #eaeaeb;
  color: black;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`

const Category = styled.div`
  background-color: #eaeaeb;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin: 10px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  background: black;
  font-size: 14px;
  font-weight: 700;
  color: #eaeaeb;
`

const Summary = styled.div`
  background-color: #eaeaeb;
  color: black;
  display: -webkit-box;
  overflow: hidden;
  margin-top: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>{item}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem

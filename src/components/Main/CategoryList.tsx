import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100px;
  margin: 47px auto 0;
  /* position: fixed; */

  h3 {
    /* align-self: center; */

    @media (max-width: 768px) {
      padding-right: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 0px;
    padding: 0 20px;
  }
`

const ListWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  padding: 10px 0px 10px 20px;
  border: 1px solid #ff007f;

  @media (max-width: 1400px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-top: 0px;
    padding: 0 20px;
    position: relative;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      <ListWrapper>
        <h3> 🐣 CATEGORY</h3>
        <br />
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            #{name}({count})
          </CategoryItem>
        ))}
      </ListWrapper>
    </CategoryListWrapper>
  )
}

export default CategoryList

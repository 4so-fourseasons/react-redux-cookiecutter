// @flow

import React from 'react'
import styled from 'styled-components'

import FakeUser from 'containers/FakeUser'

import H1 from 'components/H1'

const Wrapper = styled.div``

const Home = () => (
  <Wrapper>
    <H1>{{cookiecutter.project_name}}</H1>
    <FakeUser />
  </Wrapper>
)

export {
  Home as default
}

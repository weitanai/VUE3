
<template>
  <note>Title</note>
  <p>{{title}}</p>
  <p> height:{{height}}</p>
  <p>width: {{width}} </p>
</template>

<script >
import {useTitle} from './useTitle';
import {useWindowSize} from './useWindowSize';

export default{
  setup(){
  const title = useTitle('use title');
  const {height, width} = useWindowSize()
   
   return {title,height, width}
 }
}
</script>

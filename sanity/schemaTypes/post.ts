import {defineField,defineType} from 'sanity';
export const post=defineType({name:'post',title:'Bài viết',type:'document',fields:[
  defineField({name:'title',title:'Tiêu đề',type:'string',validation:r=>r.required()}),
  defineField({name:'slug',title:'Slug',type:'slug',options:{source:'title'},validation:r=>r.required()}),
  defineField({name:'excerpt',title:'Mô tả ngắn',type:'text'}),
  defineField({name:'category',title:'Chuyên mục',type:'string'}),
  defineField({name:'cover',title:'Ảnh cover',type:'image',options:{hotspot:true}}),
  defineField({name:'author',title:'Tác giả',type:'string'}),
  defineField({name:'publishedAt',title:'Ngày đăng',type:'datetime'}),
  defineField({name:'body',title:'Nội dung',type:'array',of:[{type:'block'},{type:'image',options:{hotspot:true}}]}),
  defineField({name:'metaTitle',title:'Meta Title (SEO)',type:'string'}),
  defineField({name:'metaDescription',title:'Meta Description (SEO)',type:'text'}),
]})

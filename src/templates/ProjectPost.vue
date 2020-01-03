<template>
  <Layout>
    <div>
      <div class="container">
        <div class="two-column introduction">
          <div class="project-info">
            <span class="label" v-html="$page.post.client" />
            <h1 class="title" v-html="$page.post.title" />
            <div class="categories-container">
              <div class="categories">
                <ul>
                  <li
                    class="category label"
                    v-for="(tag, index) in $page.post.service_tags"
                    :key="index"
                  >
                    <g-link class="tag" :to="formatUrl(tag)">{{ formatServiceName(tag) }}</g-link>
                  </li>
                </ul>
              </div>
            </div>
            <a
              class="url"
              v-if="$page.post.project_url"
              :href="$page.post.project_url"
              target="_blank"
              rel="noopener noreferrer"
            >{{$page.post.project_url}}</a>
          </div>
          <div v-if="$page.post.introduction" v-html="$page.post.introduction" />
        </div>
        <g-image
          v-if="$page.post.horizontal_image_one"
          :src="$page.post.horizontal_image_one"
          :alt="$page.post.horiz_image_one_alt"
          class="top-image"
        />
        <section class="body-text">
          <div class="project-text">
            <h2 class="label" v-if="$page.post.brief_label" v-html="$page.post.brief_label" />
            <div v-if="$page.post.brief" v-html="$page.post.brief" />
          </div>
          <div class="project-text">
            <h2 class="label" v-if="$page.post.solution_label" v-html="$page.post.solution_label" />
            <div v-if="$page.post.solution" v-html="$page.post.solution" />
          </div>
        </section>

        <section class="two-column" v-if="$page.post.two_column_vertical_images.vertical_image_one">
          <g-image
            v-if="$page.post.two_column_vertical_images.vertical_image_one"
            class="vertical-img"
            :src="$page.post.two_column_vertical_images.vertical_image_one"
            :alt="$page.post.two_column_vertical_images.vertical_image_one_alt"
          />
          <g-image
            v-if="$page.post.two_column_vertical_images.vertical_image_two"
            class="vertical-img"
            :src="$page.post.two_column_vertical_images.vertical_image_two"
            :alt="$page.post.two_column_vertical_images.vertical_image_two_alt"
          />
        </section>
        <blockquote v-if="$page.post.pull_quote" v-html="$page.post.pull_quote" />

        <div v-html="$page.post.content" class="content" />
        <div v-if="isMobile" class="content">
          mobile!!!!!!
        </div>
        <g-image
          v-if="$page.post.horizontal_image_two"
          :src="$page.post.horizontal_image_two"
          :alt="$page.post.horiz_image_two_alt"
        />

        <section class="two-column" v-if="$page.post.two_column_horizontal_images.image_one">
          <g-image
            v-if="$page.post.two_column_horizontal_images.image_one"
            :src="$page.post.two_column_horizontal_images.image_one"
            :alt="$page.post.two_column_horizontal_images.two_col_horiz_img_one_alt"
          />
          <g-image
            v-if="$page.post.two_column_horizontal_images.image_two"
            :src="$page.post.two_column_horizontal_images.image_two"
            :alt="$page.post.two_column_horizontal_images.two_col_horiz_img_two_alt"
          />
        </section>
        <blockquote v-if="$page.post.pull_quote_two" v-html="$page.post.pull_quote_two" />

        <g-image
          v-if="$page.post.horizontal_image_three"
          :src="$page.post.horizontal_image_three"
          :alt="$page.post.horizontal_image_three_alt"
        />

        <div class="project-text" v-if="$page.post.results.column_one">
          <h2 class="label">Results</h2>
          <section class="three-column">
            <div
              class="roi"
              v-if="$page.post.results.column_one"
              v-html="$page.post.results.column_one"
            />
            <div
              class="roi"
              v-if="$page.post.results.column_two"
              v-html="$page.post.results.column_two"
            />
            <div
              class="roi"
              v-if="$page.post.results.column_three"
              v-html="$page.post.results.column_three"
            />
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    date (format: "YYYY")
    client
    project_url
    service_tags {
     service_tag_one
     service_tag_two
     service_tag_three
    }
    introduction
    horizontal_image_one
    horiz_image_one_alt
    content
    brief_label
    brief
    process
    solution_label
    solution
    pull_quote
    pull_quote_two
    results {
      column_one
      column_two
      column_three
    }
    horizontal_image_two
    horiz_image_two_alt
    two_column_vertical_images {
      vertical_image_one
      vertical_image_one_alt
      vertical_image_two
      vertical_image_two_alt
    }
    two_column_horizontal_images {
      image_one
      two_col_horiz_img_one_alt
      image_two
      two_col_horiz_img_two_alt
    }
    horizontal_image_three
    horizontal_image_three_alt
  }
}
</page-query>

<script>
import formatServiceName from "@/components/utility-funcs/formatServiceName.js";
import formatUrl from "@/components/utility-funcs/formatUrl.js";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  methods: {
    formatServiceName,
    formatUrl,
    isMobile(){
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
  }
};
</script>

<style scoped>
.project-header {
  padding: 2rem 0 4rem 0;
  display: flex;
}
.categories ul {
  list-style: none;
  padding: 0;
}
.project-title {
  font-size: 4rem;
  line-height: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.title {
  margin-top: 0;
  font-size: 3rem;
  margin-bottom: 1rem;
}
.top-image {
  margin-top: 2rem;
}
.introduction {
  margin: 6rem 0;
}
.two-column {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  grid-template-rows: auto;
}
.three-column {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 4rem;
}
.vertical-img {
  margin-right: 2.5%;
}
.url {
  font-size: 1.2rem;
  text-decoration: underline;
}
.roi {
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid var(--color-highlight);
  border-left: 1px solid var(--color-highlight);
}
.roi :nth-child(1) {
  margin: 0;
}
.project-info > div {
  margin-right: 4rem;
}
.project-text-container {
  display: flex;
}
.project-text {
  font-size: 1.2rem;
  width: 75%;
}
.g-image {
  margin: 2rem 0;
  width: 100%;
}
.label {
  color: var(--color-highlight);
}
.content {
  margin-top: 20px;
}
.body-text {
  margin: 6.5rem 0;
}
blockquote {
  font-size: 2rem;
  color: var(--color-contrast);
  padding-left: 1rem;
  border-left: 1px solid var(--color-highlight);
  margin: 6.5rem 0;
}
blockquote p {
  font-size: 2rem;
  color: var(--color-highlight);
  border-bottom: 1px solid #fff;
}
.title {
  line-height: 3rem;
}
.tag {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .two-column {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .project-info {
    font-size: 1rem;
    width: 90%;
    margin: 0;
  }
  blockquote {
    font-size: 1.2rem;
  }
  blockquote p {
    font-size: 1.2rem;
  }
  .title {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
  .project-text {
    width: 95%;
  }
  .g-image {
    margin: 0.5rem 0;
  }
  .top-image {
    margin: 2rem 0;
  }
  .two-column {
    grid-template-columns: repeat(1, 1fr);
  }
  .three-column {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<template>
  <main class="home-main">
    <section class="home-hero">
      <div class="hero-copy">
        <div :style="xs || sm ? { display: 'none' } : {}" class="leleo-left-welcome hero-title">
          {{ configdata.welcometitle }}
        </div>

        <v-text-field
          class="home-search"
          v-model="searchQuery"
          placeholder="搜索或输入网址..."
          variant="outlined"
          rounded
          hide-details="true"
          @keyup.enter="performSearch"
        >
          <template v-slot:prepend-inner>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn variant="text" v-bind="props" class="engine-btn">
                  {{ selectedEngine.title }}
                  <v-icon icon="mdi-chevron-down"></v-icon>
                </v-btn>
              </template>
              <v-list class="glass-list">
                <v-list-item
                  v-for="engine in searchEngines"
                  :key="engine.value"
                  @click="selectedEngine = engine"
                  density="compact"
                >
                  {{ engine.title }}
                </v-list-item>
              </v-list>
            </v-menu>
          </template>

          <template v-slot:append-inner>
            <v-btn
              :icon="isUrl ? 'mdi-earth' : 'mdi-magnify'"
              variant="text"
              @click="performSearch"
              aria-label="搜索"
            ></v-btn>
          </template>
        </v-text-field>

        <typewriter class="typewriter-panel"></typewriter>
      </div>

      <v-card class="time-card" hover>
        <template v-slot:title>
          <span class="leleo-card-title clock-font">{{ formattedTime }}</span>
        </template>
        <template v-slot:subtitle>
          <span class="time-date">{{ formattedDate }}</span>
        </template>
        <turntable :color1="configdata.color.turntablecolor1" :color2="configdata.color.turntablecolor2" />
      </v-card>
    </section>

    <section class="projects-section">
      <div class="section-heading">
        <v-chip prepend-icon="mdi-webhook" size="large" class="section-chip">
          部署项目
        </v-chip>
        <span class="project-count">{{ projectcards?.length || 0 }} 个作品</span>
      </div>

      <v-row class="project-grid">
        <v-col
          v-for="(item, key) in projectcards"
          :key="`${item.title}-${key}`"
          cols="12"
          sm="6"
          lg="4"
          xl="3"
        >
          <v-card class="project-card" hover>
            <div class="project-cover">
              <v-img
                aspect-ratio="1.7778"
                :src="item.img"
                :alt="item.imgAlt || item.title"
                cover
              ></v-img>
              <div class="project-cover-shade"></div>
            </div>

            <div class="project-body">
              <div class="project-kicker">{{ item.subtitle }}</div>
              <h2 class="project-title">{{ item.title }}</h2>

              <div v-if="item.tags?.length" class="project-tags">
                <v-chip
                  v-for="tag in item.tags"
                  :key="`${item.title}-${tag}`"
                  density="compact"
                  size="small"
                  class="project-tag"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </div>

            <v-card-actions class="project-actions">
              <v-btn
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                variant="tonal"
                prepend-icon="mdi-open-in-new"
                text="前往"
              ></v-btn>
              <v-btn
                v-if="item.fallbackUrl && item.fallbackUrl !== item.url"
                :href="item.fallbackUrl"
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                prepend-icon="mdi-link-variant"
                text="备用"
              ></v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                variant="text"
                @click="item.show = !item.show; projectcardsShow(key);"
                aria-label="展开项目详情"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="item.show" class="project-detail">
                <v-divider></v-divider>
                <v-card-text>
                  {{ item.text }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </main>
</template> 

<script>
import typewriter from '../components/typewriter.vue';
import turntable from '../components/turntable.vue';
import { useDisplay } from 'vuetify'

export default {
    components: {
        typewriter,turntable
    },
    props: ['configdata','formattedTime','formattedDate','projectcards'],
	data() {
		return {
			searchQuery: '',
			selectedEngine: { title: 'Bing', value: 'bing' },
      		searchEngines :[
				{ title: 'Bing', value: 'bing' },
				{ title: 'Google', value: 'google' },
				{ title: '百度', value: 'baidu' },
				{ title: 'Yandex', value: 'yandex' },
				{ title: 'DuckDuckGo', value: 'duckduckgo' },
			]
		}
	},
    setup() {
      const { xs,sm,md } = useDisplay();
      return {xs,sm,md};
    },
	computed: {	
		isUrl(){
			const str = this.searchQuery.trim();
  			return this.isLikelyUrl(str);
		}
	},
    methods:{
      projectcardsShow(key){
        for(let i = 0;i < this.projectcards.length;i++){
          if(i != key){
            this.projectcards[i].show = false;
          }
        }
      },
	  performSearch() {
		const query = this.searchQuery.trim();
		if (!query) return;

		if (this.isUrl) {
			let url = query;
			// 自动补全协议（如果缺少）
			if (!/^[a-z]+:\/\//i.test(url)) {
				url = 'http://' + url; // 默认用http
			}
			
			window.open(url, '_blank');
		} else {
			const engineUrls = {
				google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
				bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
				baidu: `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`,
				yandex: `https://yandex.com/search/?text=${encodeURIComponent(query)}`,
				duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`
			};
			window.open(engineUrls[this.selectedEngine.value], '_blank');
		}
	  },
	  isLikelyUrl(input) {
		// 移除首尾空格
		const str = input.trim();
		
		// 情况1：明确包含协议头（http/https/ftp等）
		if (/^(https?|ftp):\/\//i.test(str)) return true;
		
		// 情况2：符合域名格式（支持国际化域名）
		const domainPattern = /^([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;
		
		// 情况3：localhost或IP地址
		const localPattern = /^(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(:\d+)?(\/.*)?$/i;
		
		
		return (
			domainPattern.test(str) || 
			localPattern.test(str)
		);
		}
    }
};
</script>

<style scoped>
@import url(/css/app.less);
@import url(/css/mobile.less);
.glass-list {
	background: transparent !important;
	backdrop-filter: blur(var(--leleo-blur));
	border-radius: 5%;
	color: var(--leleo-vcard-color);
	overflow: hidden;
}
</style>

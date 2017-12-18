<template>
	<div class="community">
		<Tabs type="card" class="sl-title" value="sl-card-info">
      <TabPane label="社区" name="sl-card-info">
				<Row>
					<Col span="6" v-for="item in info">
						<my-card :info="item"></my-card>
					</Col>
				</Row>
      </TabPane>
      <TabPane label="村">
				<Row>
					<Col span="6" v-for="item in village">
						<my-card :info="item"></my-card>
					</Col>
				</Row>
      </TabPane>
    </Tabs>
	</div>
</template>

<script>
	import myCard from 'base/my-card/my-card'

	export default {
		data () {
			return {
				info: [
					{
						id: 0,
						name: '长乐西苑社区',
						intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
						leader: '庞青云',
						num: "10人"
					},
					{
						id: 1,
						name: '青东社区',
						intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
						leader: '庞青云',
						num: "10人"
					},
					{
						id: 2,
						name: '海红社区',
						intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
						leader: '庞青云',
						num: "10人"
					}
				],
				village: [
					{
						id: 0,
						name: '东扬善村',
						intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
						leader: '庞青云',
						num: "10人"
					},
					{
						id: 1,
						name: '樊寨村',
						intr: '负责城乡居民养老、医疗保险业务；负责劳动保障、小额担保贷款业务；负责社区管理等业务；',
						leader: '庞青云',
						num: "10人"
					}
				]
			}
		},
		components: {
			myCard
		}
	}
</script>
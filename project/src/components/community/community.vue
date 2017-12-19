<template>
	<div class="community">
		<Tabs type="card" class="sl-title" value="sl-card-info">
      <TabPane label="社区" name="sl-card-info">
				<Row>
					<Col span="4" v-for="item in community" :key="item.id">
						<my-card :info="item"></my-card>
					</Col>
				</Row>
      </TabPane>
      <TabPane label="村">
				<Row>
					<Col span="4" v-for="item in village" :key="item.id">
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
				community: [
					{
						id: 0,
						name: '长乐西苑社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 1,
						name: '青东社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 2,
						name: '海红社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 3,
						name: '南党社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 4,
						name: '北李社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 5,
						name: '青西社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},{
						id: 6,
						name: '刘家社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 7,
						name: '朱宏堡社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					},
					{
						id: 8,
						name: '贾村社区',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '社区主任：庞青云',
						num: '党员87人'
					}
				],
				village: [
					{
						id: 0,
						name: '东扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 1,
						name: '西扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 2,
						name: '樊寨村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 3,
						name: '高北村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 4,
						name: '高南村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 5,
						name: '青西村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},{
						id: 6,
						name: '刘家村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 7,
						name: '朱宏堡村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 8,
						name: '贾村村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 9,
						name: '东扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 10,
						name: '西扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 11,
						name: '樊寨村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 12,
						name: '高北村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 13,
						name: '高南村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 14,
						name: '青西村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},{
						id: 15,
						name: '刘家村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 16,
						name: '朱宏堡村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 17,
						name: '贾村村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},{
						id: 18,
						name: '东扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 19,
						name: '西扬善村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					},
					{
						id: 20,
						name: '樊寨村',
						intr: '现有居民739人，男性：341人，女性：249人',
						leader: '村主任：庞青云',
						num: '党员87人'
					}
				]
			}
		},
		components: {
			myCard
		}
	}
</script>
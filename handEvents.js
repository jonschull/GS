GlowScript 2.7 VPython

#print(__name__)   #__embedded__ in Vpython
V=vector

dragging=False
toDrag=0

def handleEvent(event,hit):
    nonlocal dragging, toDrag
    print('handling event!', event, '\t', end='')#, hit.name)
    if hit: 
        print(hit.name)
    else:
        print()
    if event=='mousedown': 
        dragging=True
        toDrag=hit
        toDrag.emissive=True
    if event=='mouseup':   
        dragging=False
        toDrag.emissive=False
    if event=='mousemove':
        toDrag.pos=scene.mouse.pos
    

 
def dispatcher(ev):
    hit=None # scene.mouse.pick is expensive 
    
    if ev.event in ['mousedown', 'click']:
        hit=scene.mouse.pick #scene.mouse.pick gets defined on these events
    
    handleEvent(ev.event, hit)
        
scene.bind("mousedown mousemove mouseup click", dispatcher)


if __name__=='__embedded__':
    
    Tom=sphere(name='Tom', color=color.yellow)
    Dick=sphere(name='Dick', pos=V(-1,1,0), color=color.blue)
    s2=sphere(pos=V(3,3,0), color=V(0.5,0.5,0.5), opacity=0.5)

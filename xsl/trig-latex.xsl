<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<!--
 Assumes current file is in trig/xsl and that the mathbook repository is adjacent 
-->
<xsl:import href="../../mathbook/xsl/pretext-latex.xsl"/>
<!--    -->
<!--  List Chapters and Sections in Table of Contents  -->
<xsl:template match="exercises//exercise" mode="xref-number">
    <xsl:apply-templates select="." mode="serial-number" />
</xsl:template>
<!-- color theme -->
<!--<xsl:param name="html.css.colorfile" select="'colors_default.css'" />
-->
<xsl:param name="latex.geometry" select="'letterpaper,left=1.5in,right=1in'"/><xsl:output method="text" />
<!-- "assemblage" -->
<!-- Boxed title -->
<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=violet!5, colframe=violet!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=violet!45!white, coltitle=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "definition" -->
<!-- Boxed title -->
<xsl:template match="definition" mode="tcb-style">
    <xsl:text>enhanced, arc=1ex, colback=teal!5, colframe=teal!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=teal!15, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "example" -->
<!-- Boxed title -->
<xsl:template match="example" mode="tcb-style">
    <xsl:text>enhanced, colback=white, colframe=black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=blue!45!black, coltitle=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "investigation" -->
<!-- -->
<xsl:template match="investigation" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=white, colframe=blue!10!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "activity" -->
<!-- -->
<xsl:template match="activity" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=yellow!5, colframe=yellow,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "for algebra refresher"  -->
<xsl:template match="project" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=cyan!3, colframe=cyan!75,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "for skills answers"  -->
<xsl:template match="exploration" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=cyan!3, colframe=cyan!30!teal!40,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "objectives", "outcomes", etc -->
<xsl:template match="objectives" mode="tcb-style">
    <xsl:text>enhanced, title engine=path, colback=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>colframe=blue, colbacktitle=white, coltitle=black,fonttitle=\bfseries,attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=0mm,&#xa;</xsl:text>
    <xsl:text>title style={left color=white, right color=white}, </xsl:text>
</xsl:template>
<!-- "outcomes", "outcomes", etc -->
<xsl:template match="outcomes" mode="tcb-style">
     <xsl:text>enhanced, title engine=path, colback=white, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>colframe=magenta!50!black, colbacktitle=white, coltitle=black,fonttitle=\bfseries,attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=0mm,&#xa;</xsl:text>
    <xsl:text>title style={left color=white, right color=white}, </xsl:text>
</xsl:template>
<!-- "caution!"  -->
<xsl:template match="warning" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=white, colframe=red!75!white,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>
<!-- "checkpoint!"  -->
<xsl:template match="exercise" mode="tcb-style">
    <xsl:text>enhanced, arc=2ex, colback=white, colframe=teal!75!black,&#xa;</xsl:text>
    <xsl:text>colbacktitle=white, coltitle=black, boxed title style={sharp corners, frame hidden},&#xa;</xsl:text>
    <xsl:text>fonttitle=\bfseries, attach boxed title to top left={xshift=4mm,yshift=-3mm}, top=3mm,&#xa;</xsl:text>
</xsl:template>


</xsl:stylesheet>